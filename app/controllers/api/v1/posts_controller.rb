module Api
    module V1
        class PostsController < ApplicationController
            include CurrentUserConcern

            def index

                @posts = @current_user.posts.reverse
                @post_array = []
                @posts.each do |post|
                    post_with_images = {}
                    post_with_images[:post] = post
                    post_with_images[:image_url] = post.image ? url_for(post.image) : null
                    @post_array << post_with_images
                end
                render json: @post_array, status: 200

            end

            def create
                @post = @current_user.posts.new(posts_params)
                if @post.save
                    render json: @post, status: 200
                else
                    render json: "error", status: 402
                end

            end

            private

            # Strong params
            def posts_params
                params.require(:post).permit(:title, :description, :image)
            end
        end
    end
end