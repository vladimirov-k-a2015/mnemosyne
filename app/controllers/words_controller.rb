class WordsController < ApplicationController

    def random
        n = params[:n]
   	    voc = Vocabulary.new
        words = voc.get_random_words(n)
        # p params
        respond_to do |format|
            format.html  
            format.json  { render :json => words }
        end
    end

end
