age = 25
has_ticket = True

# შევამოწმოთ ადამიანი 18 წელზე დიდია და აქვს ბილეთი
can_enter = age > 18 and has_ticket

print(can_enter)
age > 18         # ეს არის comparison operation → 25 > 18 → შედეგი: True
has_ticket       # ეს არის Boolean მნიშვნელობა → True

# შემდეგ ვიყენებთ logical operation-ს: and
# ანუ: True and True → შედეგი: True