namespace :jects do
  desc "outputs list of projects in format to be used in final project directory md"
  task to_md: :environment do
    Project.order(votes_count: :desc).each do |p|
      puts "* #{ p.user.name }: [#{ p.title }](http://#{ p.url })"
    end
  end
end
