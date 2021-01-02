Rails.application.routes.draw do
  root 'app#index'
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  #Must be last declared route
  match '*path', to: 'app#index', via: :all
end