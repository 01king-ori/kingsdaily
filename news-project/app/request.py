from app import app
import urllib.request
import json
from .models import News
#Getting api key
api_key = app.config['NEWS_API_KEY']
News = News.News


def get_news(category):
    '''
    Function that gets the json response to our url request
    '''
    get_news_url = base_url.format(category, api_key)

    with urllib.request.urlopen(get_news_url)as url:
     get_news_data = url.read()
     get_news_response = json.loads(get_news_data)

    news_results = None

    if get_news_response['results']:
        news_results_list = get_news_response['results']
        news_results =process_results(news_results_list)

    return news_results
def process_results(news_list):
    '''
    Function  that processes the news result and transform them to a list of Objects

    Args:
        news_list: A list of dictionaries that contain movie details

    Returns :
        news_results: A list of movie objects
    '''
    news_results = []
    for news_item in news_list:
        id = news_item.get('id')
        title = news_item.get('original_title')
        overview = news_item.get('overview')
        poster = news_item.get('poster_path')
        vote_average = news_item.get('vote_average')
        vote_count = news_item.get('vote_count')

        if poster:
            movie_object = News(id,title,overview,poster,vote_average,vote_count)
            news_results.append(movie_object)

    return news_results