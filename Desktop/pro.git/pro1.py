import random

print("Number Guessing Game")

secret_number = random.randint(1, 100)

attempts = 0
max_attempts = 7

print("Guess a number between 1 and 100")
print("You have", max_attempts, "attempts\n")

while attempts < max_attempts:
    guess = int(input("Enter your guess: "))
    attempts += 1

    if guess == secret_number:
        print("Correct! You guessed the number.")
        print("Attempts used:", attempts)
        break

    elif guess < secret_number:
        print("Too low! Try a bigger number.")

    else:
        print("Too high! Try a smaller number.")

    print("Attempts left:", max_attempts - attempts, "\n")

if guess != secret_number and attempts == max_attempts:
    print("Game Over!")
    print("The correct number was:", secret_number)

print("Thank you for playing")