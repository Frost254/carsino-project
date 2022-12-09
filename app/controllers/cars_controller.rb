class CarsController < ApplicationController
  before_action :authorize, only: [:create, :update, :destroy]

  def index
    render json: Car.all, status: :ok
  end

  def create
    user = User.find_by(id: session[:user_id])
    car = user.cars.create!(car_params)
    render json: car, status: 201
  end

  def update
    car = find_car
    car.update(params.permit(:rating))
    render json: car, status: :accepted
  end

  def destroy
    car = find_car
    car.destroy
    head :no_content
  end

  private

  def find_car
    Car.find(params[:id])
  end

  def car_params
    params.permit(:name, :image_url, :description, :rating)
  end
end
