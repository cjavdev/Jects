# puts "Creating Jamaican Dave"
#
# dave = User.new(
#   provider: 'github',
#   uid: 123,
#   login: 'jamaicandave',
#   name: 'Jamaican Dave',
#   email: 'thejamaicandave@gmail.com',
#   session_token: "stuff",
#   image: "img"
# )
#
# if dave.save
#   puts "Daves the man!"
# else
#   p dave.errors
# end

1000.times do |n|
  u = User.create(
    provider: :github,
    uid: n,
    login: Faker::Internet.user_name,
    name: "#{ Faker::Name.first_name } #{ Faker::Name.last_name }",
    email: Faker::Internet.email,
    image: :img,
    session_token: SecureRandom.hex
  )
  p = u.project
  p.title = "#{ Faker::Hacker.abbreviation } #{ Faker::Hacker.ingverb}  #{ Faker::Hacker.noun }"
  name = Faker::Internet.domain_word
  p.url = "#{ name }.#{ Faker::Internet.domain_suffix }/"
  p.gitrepo = "#{ name }/#{ name }"
  p.save
  puts "#{ name } created! #{ n } / 1000"
end
