Rails.application.routes.draw do

  #add full CRUD routes
  resources :contributions
  resources :tasks
  resources :projects
  
  #custom routes for user sessions capability
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'


  #custom routes for sessions login and out
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'



end
