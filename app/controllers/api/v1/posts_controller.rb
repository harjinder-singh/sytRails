module Api
    module V1
        class PostsController < ApplicationController
            include CurrentUserConcern

            def index

                @posts = Post.all
                render json: @posts, status: 200

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
                params.require(:post).permit(:title, :description)
            end
        end
    end
end