require 'colorize'
require 'active_support/inflector'
require 'fileutils'

puts  "Enter class name".green
a = gets.chomp

## Get Template files
file1 = Dir.pwd + '/src/app/resources/resource.ts'
file2 = Dir.pwd + '/src/app/resources/resources.component.ts'
file3 = Dir.pwd + '/src/app/resources/resource-detail.component.ts'
file4 = Dir.pwd + '/src/app/resources/resource-detail.component.html'
file5 = Dir.pwd + '/src/app/resources/resources.component.html'
file6 = Dir.pwd + '/src/app/resources/resource.service.ts'
file7 = Dir.pwd + '/src/app/resources/resource.module.ts'
file8 = Dir.pwd + '/src/app/resources/resource-creation.component.ts'
file9 = Dir.pwd + '/src/app/resources/resource-creation.component.html'


new_dir = Dir.pwd + '/src/app/' + ActiveSupport::Inflector.pluralize(a.downcase)
FileUtils.mkdir_p new_dir

file_names = [ file1, file2, file3, file4, file5, file6, file7, file8, file9] #, file7, file8, file9, file10, file11 ]

pluralCap = ActiveSupport::Inflector.pluralize(a.capitalize)
pluralDown = ActiveSupport::Inflector.pluralize(a.downcase)

## Copy the resource template structure, make files and directories with new name.
## inside is the file name, outside is the new directory
file_names.each do |file_name|
 text = File.read(file_name)
  outside = file_name.gsub(/resources/, pluralDown )
  outside = outside.gsub(/resource/, a.downcase)
  inside = text.gsub(/Resources/, pluralCap )
  inside = inside.gsub(/Resource/, a.capitalize )
  inside = inside.gsub(/resources/, pluralDown )
  inside = inside.gsub(/resource/, a.downcase )
  new_file =  File.new(outside, "w")
  # Write changes to the file:
  File.open(new_file, "w") {|file| file.puts inside }
end

def replace(filepath, regexp, *args, &block)
  content = File.read(filepath).gsub(regexp, *args, &block)
  File.open(filepath, 'wb') { |file| file.write(content) }
end

tsFile = Dir.pwd + '/app/app.component.ts'


importReplacers = []
importReplacers[0] = "import { #{a.capitalize}Service } from './#{pluralDown}/#{a.downcase}.service';"
importReplacers[1] = "import { #{pluralCap}Component } from './#{pluralDown}/#{pluralDown}.component';"
importReplacers[2] = "import { #{a.capitalize}DetailComponent } from './#{pluralDown}/#{a.downcase}-detail.component';"
importReplacers[3] = "import { #{a.capitalize}CreationComponent } from './#{pluralDown}/#{a.downcase}-creation.component';"
importReplacers[4] =  ""

# importReplacers.each do |f|
#   replace(tsFile, /Import-Addition/mi) do |match|
#     "#{match} \n #{f}"
#     end
# end

# Add the new Service to app.component.ts
# serviceReplacers =  [ " #{a.capitalize}Service," ]
# serviceReplacers.each do |f|
#   replace(tsFile, /Service-Addition/mi) do |match|
#     "#{match} \n   #{f}"
#     end
# end

# Add new routes to the app.component.ts
routeReplacers = []
routeReplacers[0] =  "{ path: '/#{pluralDown}', name: '#{pluralCap}', component: #{pluralCap}Component },"
routeReplacers[1] =  "{ path: '/#{a.downcase}', name: '#{a.capitalize}Detail', component: #{a.capitalize}DetailComponent },"

# routeReplacers.each do |f|
#   replace(tsFile, /Route-Addition/mi) do |match|
#     "#{match} \n  #{f}"
#     end
# end
