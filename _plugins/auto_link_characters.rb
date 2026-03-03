# _plugins/auto_link_characters.rb
module Jekyll
  module AutoLinkCharacters
    # Replace character names in post content with links
    def link_characters(input)
      site = @context.registers[:site]
      characters = site.data['characters'] || []

      output = input.dup

      characters.each do |char|
        name = char['name']
        url = char['url'] || "#"
        desc = char['description'] || ""
        fandom = "https://www.fandom.com/wiki/#{name.gsub(' ', '_')}"

        # First, internal link
        internal_link = "<a href='#{url}' title='#{desc}'>#{name}</a>"

        # Replace all occurrences that are not already links
        output.gsub!(/(?<!href=['"].*)#{Regexp.escape(name)}/, internal_link)

        # Then fallback to external Fandom if internal not applied
        output.gsub!(/(?<!href=['"].*)#{Regexp.escape(name)}/, "<a href='#{fandom}' target='_blank'>#{name}</a>")
      end

      output
    end
  end
end

Liquid::Template.register_filter(Jekyll::AutoLinkCharacters)
