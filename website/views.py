from multiprocessing import context
from django.shortcuts import render
import json
def home(request):
	return render(request, 'base.html')

def hamilton(request):
	with open('website/drivers_jsons/hamilton.json', encoding='utf-8') as json_file:
		data = json.load(json_file)
		print(data)
	lang = request.GET.get('lang')
	if lang == "PL":
		context = data["PL"]
	else:
		context = data["EN"]
	return render(request, 'hamilton.html', context)	

def vettel(request):
	return render(request, 'vettel.html')	
