require_relative './robot'
require_relative './turn_manager'

class Game
  def initialize
    # Our list of players/robots
    @robots = [
      Robot.new('MY NAME IS jeff!'),
      Robot.new('C3-P0'),
      Robot.new('Wall-E'),
      Robot.new('Bender'),
      Robot.new('Lt Cmd Data')
    ]

    # The turn manager manages which round it is as well as
    # which robot is attacking and which is defending
    @turn_manager = TurnManager.new(@robots)
  end

  def play
    # while the game is not over
    while (not game_over?) do
      # get the next turn from the turn_manager
      turn = @turn_manager.next_turn

      # print out a round header
      puts ""
      puts "==== ROUND ##{turn.round} ====="
      puts ""

      # if the attacking target is dead, print a message and move on
      if turn.attacker.dead?
        puts "#{turn.attacker.name} is dead ☠️"
        next
      end

      # Allow the robot to attack the defender
      puts "#{turn.attacker.name} is attacking #{turn.defender.name}"
      damage = turn.attacker.attack turn.defender
      puts "#{turn.attacker.name} did #{damage} points of damage to #{turn.defender.name}!"

      # Print the round summary
      print_summary

      # Wait 0.5 seconds so we can actually watch the game go
      sleep 0.5
    end

    # The game is over, print the end game summary
    end_game_summary
  end

  # Helper method to tell when the game is over
  def game_over?
    alive_robots.count == 1
  end

  # Helper method to get all the alive robots
  def alive_robots
    @robots.select {|r| not r.dead? }
  end

  def print_summary
    puts ""
    puts "===== SUMMARY ====="
    @robots.each do |r|
      puts r.summary
    end
    puts ""
  end

  def end_game_summary
    winner = alive_robots[0]

    puts ""
    puts "GAME OVER!"
    puts "#{winner.name} Wins!"
    puts "Congratulations"
  end

end
