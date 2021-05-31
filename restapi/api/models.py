from django.db import models
from django.db.models.deletion import CASCADE

class Tag(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self) -> str:
		return self.name


class Task(models.Model):
	title = models.CharField(max_length=100)
	#
	# auto_now_add -> create時のみ更新
	#
	created_at = models.DateTimeField(auto_now_add=True)
	#
	# auto_now -> update時のみ更新
	#
	updated_at = models.DateTimeField(auto_now=True)
	#
	# tag_id
	#
	tag = models.ForeignKey(Tag, null=True, on_delete=models.CASCADE)

	def __str__(self) -> str:
		return self.title
