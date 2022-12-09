Rails.application.routes.draw do
  resources :users
  resources :cars
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  get "/recipes", to: "recipes#index"
  post "/recipes", to: "recipes#create"
  # Defines the root path route ("/")
  # root "articles#index"
end
