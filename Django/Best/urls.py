from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('KOSPI50', views.KOSPI50View)
router.register('STOCKVALUES', views.STOCKVALUESView)
router.register('FINANCESTATE', views.FINANCESTATEView)
router.register('POSORNEG', views.POSORNEGView)
router.register('MEANOFPER', views.MEANOFPERView)

urlpatterns = [
    path('', include(router.urls))
]
