test = "Hi Mark welcome to the shower"

def spin_words(sentence):
    # Your code goes here
    split_sentence = sentence.split()
    for word in split_sentence:
        if len(word) >= 5:
            word_index = split_sentence.index(word)
            reversed_word = word[::-1]
            split_sentence[word_index] = reversed_word
            
    return " ".join(split_sentence)

print(spin_words(test))