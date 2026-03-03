require 'open-uri'
require 'nokogiri'
require 'fileutils'

module Jekyll
  class FandomImageFetcher < Generator
    safe true
    priority :low

    def generate(site)
      site.posts.docs.each do |post|
        next if post.data['image'] # skip if already has image

        character_name = post.data['character_name'] || post.data['title']
        image_filename = "#{character_name.downcase.gsub(' ', '_')}.jpg"
        image_path = File.join(site.source, "assets/images/#{image_filename}")

        # Skip if file already exists
        next if File.exist?(image_path)

        # Fandom URL (replace spaces with underscores)
        fandom_url = "https://www.fandom.com/wiki/#{character_name.gsub(' ', '_')}"

        begin
          html = URI.open(fandom_url).read
          doc = Nokogiri::HTML(html)

          # Fandom main image selector (first image in infobox)
          img_tag = doc.at_css('.pi-image-thumbnail') || doc.at_css('.infobox img')
          img_url = img_tag['src'] if img_tag

          if img_url
            FileUtils.mkdir_p(File.dirname(image_path))
            URI.open(img_url) do |image|
              File.open(image_path, 'wb') { |file| file.write(image.read) }
            end

            post.data['image'] = "/assets/images/#{image_filename}"
            puts "✅ Fandom image fetched for #{character_name}"
          else
            puts "⚠️ No image found for #{character_name}"
          end

        rescue OpenURI::HTTPError => e
          puts "⚠️ Fandom page not found for #{character_name}: #{e.message}"
        rescue => e
          puts "⚠️ Error fetching image for #{character_name}: #{e.message}"
        end
      end
    end
  end
end
