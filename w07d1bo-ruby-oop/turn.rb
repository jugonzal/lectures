class Turn
  attr_reader :attacker, :defender, :round

  def initialize attacker, defender, round
    @attacker = attacker
    @defender = defender
    @round = round
  end
end
