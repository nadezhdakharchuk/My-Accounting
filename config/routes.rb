Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "home#index"

  # Website
  get "/home/" => 'home#index', as: :home
  get "/" => 'home#index', as: :website_home
end
