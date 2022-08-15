class OwnersController < ApplicationController
  #before_action :set_owner, only: %i[ show update destroy ]

  skip_before_action :authorize, only: :create

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :handle_baddata

  # GET /owners
  def index
    @owners = Owner.all

    render json: @owners
  end

  # GET /owners/1
  def show
    owner = Owner.find_by(id: session[:owner_id])
    #owner = Owner.find_by(id: params[:id])
    render json: owner
  end

  # POST /owners
  def create
    owner = Owner.create!(owner_params)
    session[:owner_id] = owner.id
    render json: owner, status: :created
  end

  # PATCH/PUT /owners/1
  def update
    owner = Owner.find_by(id: session[:owner_id])
    #owner = Owner.find_by(id: params[:id])
    owner.update(update_params)
    render json: owner
  end

  # DELETE /owners/1
  def destroy
    
    @owner.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_owner
      @owner = Owner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def owner_params
      params.permit(:name, :phone, :e_mail, :city_state, :dog_id, :password, :id, :img_url)
    end

    def update_params
      params.permit(:name, :phone, :e_mail, :city_state, :img_url)
    end

    def handle_baddata(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
      
    def render_not_found
      render json: { error: "NOT FOUND"}, status: :not_found
    end

end
