Rails.application.routes.draw do
  root to: "static_pages#root"
  get "/auth/:github/callback", to: "sessions#create"
  resource :session
end
