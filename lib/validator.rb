class Validator
    def validate n
        n = Integer(n) rescue nil
        if n && n > 0
            n
        else
            nil
        end
    end
end