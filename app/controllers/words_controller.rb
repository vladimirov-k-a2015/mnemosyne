class WordsController < ApplicationController
	
	def random 
    	n = params[:n]
		@random_numbers = n.to_i.times.map { rand(1..20) }
		p params
		p params
		p params
		respond_to do |format|
	        format.html  
	        format.json  { render :json => @random_numbers }	
	    end
	end


end
