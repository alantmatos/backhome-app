Rails.application.routes.draw do
  resources :tags
  resources :dogs
  resources :owners
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post '/createaccount', to: 'owners#create'
  post '/login', to: 'sessions#create'
  get '/autologin', to: 'owners#show'
  delete '/logout', to: 'sessions#destroy'

  get '/findpet/:tag_number', to: 'dogs#findpet'
  


end
