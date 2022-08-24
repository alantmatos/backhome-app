class DogsController < ApplicationController
  before_action :set_dog, only: %i[ show update destroy ]

  # GET /dogs
  def index
    @dogs = Dog.all

    render json: @dogs
  end

  # GET /dogs/1
  def show
    render json: @dog
  end

  def findpet
    dog = Dog.where(tag_number: params[:tag_number])
    render json: dog
  end

  # POST /dogs
  def create
    dog = Dog.create!(dog_params)
    dog.owner = @current_user
    render json: dog, status: :created
  end

  # PATCH/PUT /dogs/1
  def update
    dog = Dog.find_by(id: params[:id])
    dog.update!(update_dog_params)
    render json: dog
    
  end

  # DELETE /dogs/1
  def destroy
    @dog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dog
      @dog = Dog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dog_params
      params.permit(:name, :favorite_food, :age, :color, :breed, :tag_number, :safe_tag_number, :owner_id, :img_url )
    end

    def update_dog_params
      params.permit(:name, :favorite_food, :age, :color, :breed, :tag_number, :safe_tag_number, :owner_id, :img_url, :id, :dogData)
    end

end
