require 'hoe'
require './lib/safedata/version.rb'

Hoe.spec 'safedata' do

  self.version = SaferData::VERSION

  self.summary = "safedata - safe (algebraic) union data types with enumerated variants"
  self.description = summary

  self.urls    = ['https://github.com/s6ruby/safedata']

  self.author  = 'Gerald Bauer'
  self.email   = 'wwwmake@googlegroups.com'

  # switch extension to .markdown for gihub formatting
  self.readme_file  = 'README.md'
  self.history_file = 'CHANGELOG.md'

  self.extra_deps = [
    ['enums', '>=1.1.1'],
  ]

  self.licenses = ['Public Domain']

  self.spec_extras = {
    required_ruby_version: '>= 2.2.2'
  }

end
