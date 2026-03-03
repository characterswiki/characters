require 'open-uri'
require 'fileutils'
require 'digest'

module Jekyll
  class AdvancedImageScraper < Generator
    safe true
    priority :low

    def generate(site)
      site.posts.docs.each do |post|

        next if post.data['image']

        name   = post.data['character_name'] || post.data['title']
        series = post.data['series']

        next unless name

        puts "🔎 Searching image for #{name}"

        fandom_url = build_fandom_url(name, series)
        next unless fandom_url

        begin
          html = URI.open(fandom_url, "User-Agent" => "Mozilla/5.0").read

          image_url = extract_og_image(html)
          next unless image_url

          save_image(site, post, image_url, name)

        rescue => e
          puts "❌ Failed for #{name}: #{e.message}"
        end
      end
    end

    # Build fandom URL smartly
    def build_fandom_url(name, series)
      formatted_name = name.gsub(" ", "_")

      if series
        formatted_series = series.downcase.gsub(" ", "-")
        return "https://#{formatted_series}.fandom.com/wiki/#{formatted_name}"
      end

      # fallback
      "https://fandom.com/wiki/#{formatted_name}"
    end

    # Extract og:image using regex
    def extract_og_image(html)
      match = html.match(/<meta property="og:image" content="(.*?)"/)
      match ? match[1] : nil
    end

    def save_image(site, post, url, name)
      ext = File.extname(url).split("?").first
      ext = ".jpg" if ext.empty?

      filename = name.downcase.gsub(" ", "_")
      filename = Digest::MD5.hexdigest(filename)[0..10] + ext

      image_dir = File.join(site.source, "assets/images")
      FileUtils.mkdir_p(image_dir)

      image_path = File.join(image_dir, filename)
      return if File.exist?(image_path)

      URI.open(url, "User-Agent" => "Mozilla/5.0") do |image|
        File.open(image_path, "wb") { |f| f.write(image.read) }
      end

      post.data['image'] = "/assets/images/#{filename}"

      puts "✅ Image saved for #{name}"
    end
  end
end
