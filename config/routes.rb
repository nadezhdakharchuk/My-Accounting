Rails.application.routes.draw do
  resources :expenses
  resources :tests
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "home#index"

  # Website
  get "/home/" => 'home#index', as: :home
  get "/" => 'home#index', as: :website_home

  namespace :api do
    namespace :v1 do
      resources :expenses, only: [:index, :create]
    end
  end
end
