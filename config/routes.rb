Rails.application.routes.draw do
  # get 'lists/index'
  # get 'lists/show'
  # get 'lists/new'
  # get 'lists/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'lists#index'
  resources :lists, only: [:index]
end
