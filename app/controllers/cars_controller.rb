class CarsController < ApplicationController
  before_action :authorize

  def index
    render json: Car.all, status: :ok
  end

  def create
    user = User.find_by(id: session[:user_id])
    car = user.cars.create!(car_params)
    render json: car, status: 201
  end

  def update
    car = Car.find_by(id: params[:id])
    car.update(car_params)
    render json: car, status: :accepted
  end

  def destroy
    car = Car.find_by(id: params[:id])
    car.destroy
    head :no_content
  end

  private

  def find_car

  def car_params
    params.permit(:name, :image_url, :description)
  end
end
