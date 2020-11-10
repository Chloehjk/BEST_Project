from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('students', views.StudentView)
router.register('scores', views.ScoreView)

urlpatterns = [
    path('', include(router.urls)),
    path('test', views.StudentBasicView),
    path('test/<pk>', views.StudentDetailBasicView),
    path('testscore', views.ScoreBasicView),
    path('testscore/<pk>', views.ScoreDetailBasicView),
    
    ##########CBV############
    # path('students', views.StudentView.as_view()),
    # path('students/<pk>', views.StudentDetailView.as_view()),
    # path('scores', views.ScoreView.as_view()),
    # path('scores/<pk>', views.ScoreDetailView.as_view()),
    ##########FBV############
    # path('students/', views.StudentView),
    # path('students/<id>', views.StudentDetailView),
    # path('scores/', views.ScoreView),
    # path('scores/<id>', views.ScoreDetailView),

]
