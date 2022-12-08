class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless session[:user_id]
  end

  def render_not_found_response
    render json: { error: "Bird not found" }, status: :not_found
  end

  def render_unprocessable_entity(invalid)
    return render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
