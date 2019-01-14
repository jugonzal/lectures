require_relative './turn'

class TurnManager
  def initialize players
    @players = players.dup
    @round_number = 0
    @current_index = 0
  end

  def next_turn
    attacker = @players[@current_index]
    defender = get_defender attacker

    increment_turn

    Turn.new(attacker, defender, @round_number)
  end

  private

  def increment_turn
    @round_number += 1
    @current_index = (@current_index + 1) % @players.count
  end

  def get_defender attacker
    @players.select {|p| p != attacker && !p.dead? }.sample
  end
end
