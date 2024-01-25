# import serializers from the REST framework
from rest_framework import serializers
from datetime import datetime, timedelta
from django.utils import timezone

# import the todo data model
from .models import Todo

# create a serializer class
class TodoSerializer(serializers.ModelSerializer):
	formatted_created_date = serializers.SerializerMethodField()

	# create a meta class
	class Meta:
		model = Todo
		fields = ('id','text', 'created_date', 'formatted_created_date',)


	def get_formatted_created_date(self, obj):
		date = obj.created_date
		today = timezone.now()
		yesterday = today - timedelta(days = 1)

		if self.is_same_day(date, today):
			return "Today"
		elif self.is_same_day(date, yesterday):
			return "Yesterday"
		else:
			diff_in_days = (today - date).days

			if diff_in_days == 1:
				return f'{diff_in_days} day ago'

			elif diff_in_days > 15:
				return date.strftime("%d-%m-%y") 
			return f'{diff_in_days} days ago'
	
	def is_same_day(self, date1, date2):
		return(
			date1.year == date2.year and 
			date1.month == date2.month and
			date1.day == date2.day
		)




		