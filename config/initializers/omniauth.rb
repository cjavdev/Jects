Rails.application.config.middleware.use OmniAuth::Builder do
  if Rails.env.development?
    provider :github, ENV['GITHUB_DEV_KEY'], ENV['GITHUB_DEV_SECRET'], scope: 'repo'
  else
    provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET'], scope: 'repo'
  end
end

