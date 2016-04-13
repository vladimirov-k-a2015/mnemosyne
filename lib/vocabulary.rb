class Vocabulary

	def pick_random_line
	  chosen_line = nil
	  File.foreach("#{Rails.root}/lib/word_rus.txt").each_with_index do |line, number|
	    chosen_line = line.strip if rand < 1.0/(number+1)
	  end
	  return chosen_line
	  puts chosen_line
	end
	# -Есть вариант выбора случайных слов, но тогда в памяти будет массив с 14 000 элементов----------
	# def pick_random_line
	#   File.readlines("word_rus.txt").sample
	# end
	# -----------------------

	def get_random_words x
	   get_random_words = (0..(x.to_i-1)).map{ pick_random_line }
	end

end


