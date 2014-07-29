Rails.application.routes.draw do
  root to: "static_pages#root"
  get "/auth/:github/callback", to: "sessions#create"
  resource :session

  namespace :api do
    resources :projects
    resources :votes
    delete "/votes", to: "votes#destroy_them_all"
  end
end
