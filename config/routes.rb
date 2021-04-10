Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  root 'app#index'
  #Must be last declared route
  #match '*path', to: 'app#index', via: :all
  get '*path', to: 'app#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end
end