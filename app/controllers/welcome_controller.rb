class WelcomeController < ApplicationController
  def index
    @url = ENV['url']
  end
end
