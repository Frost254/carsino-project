class CarsController < ApplicationController
  before_action :authorize

  def index
    render json: Car.all, status: :ok
  end

  def create
    user = User.find_by(id: session[:user_id])
    recipe = user.cars.create!(car_params)
    render json: car, status: 201
  end

  private

  def car_params
    params.permit(:name, :image_url, :description)
  end
end
