import unittest
from models import news
News = news.News
class NewsTest(unittest.Testcase):
    '''
    Text Class to test the behaviour of the News class
    '''
    def setUp(self):
        '''
        Set up method that will run before every test
        '''
        self.new_news = News(1234,'Thrilling news for you')

        def test_instance(self):
            self.assertTrue(isinstance(self.new_news,News))
if __name__ =='__main__':
    unittest.main()