class Vocabulary

    def pick_random_line
      chosen_line = nil
      File.foreach("#{Rails.root}/lib/word_rus.txt").each_with_index do |line, number|
        chosen_line = line.strip if rand < 1.0/(number+1)
      end
      return chosen_line
      puts chosen_line
    end


    def get_random_words x
        validator = Validator.new
        return "HUI" unless validator.validate(x)
        get_random_words = (0..(x.to_i-1)).map{ pick_random_line }
    end

end