class Robot
  attr_reader :name, :health

  MAX_HEALTH = 50

  def initialize name
    @name = name
    @health = MAX_HEALTH
    @attack_power = 10
  end

  def attack_power
    if berserk?
      @attack_power * 2
    else
      @attack_power
    end
  end

  def attack other_robot
    damage = rand(1...self.attack_power)

    other_robot.take_damage damage

    damage
  end

  def take_damage amount
    @health -= amount
  end

  def berserk?
    @health <= MAX_HEALTH * 0.1
  end

  def summary
    "#{@name}: #{@health} Health#{berserk_summary}#{dead_summary}"
  end

  def berserk_summary
    berserk? ? ' 😡' : ''
  end

  def dead_summary
    dead? ? ' ☠️' : ''
  end

  def dead?
    @health <= 0
  end
end
