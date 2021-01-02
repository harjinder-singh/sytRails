
if Rails.env == 'production'
    Rails.application.config.session_store :cookie_store, key: "_syt_app", domain: "showyourtalent.herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, key: "_syt_app"
end