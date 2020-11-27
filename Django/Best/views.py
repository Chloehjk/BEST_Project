from django.shortcuts import render
from .models import KOSPI50, STOCKVALUES,FINANCESTATE,POSORNEG,MEANOFPER, POINTDATE, MAKEWORDCLOUD
from .serializer import KOSPI50Serializer, STOCKVALUESSerializer, FINANCESTATESerializer,POSORNEGSerializer,MEANOFPERSerializer, POINTDATESerializer, MAKEWORDCLOUDSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404

# Create your views here.
# queryset은 얘랑 SQL이랑 연결하는 것(queryset=모델명.objects.all() <= 다 가져온다는 뜻)
# serializer 이름 동일하게 다 가지고옴


class KOSPI50View(ModelViewSet):

    queryset = KOSPI50.objects.all()
    serializer_class = KOSPI50Serializer

class STOCKVALUESView(ModelViewSet):
    
    queryset = STOCKVALUES.objects.all()
    serializer_class = STOCKVALUESSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        code = self.request.query_params.get('code')
        if code:
            qs = qs.filter(code=code)
        return qs


class FINANCESTATEView(ModelViewSet):
    
    queryset = FINANCESTATE.objects.all()
    serializer_class = FINANCESTATESerializer

    def get_queryset(self):
        qs = super().get_queryset()
        code = self.request.query_params.get('code')
        if code:
            qs = qs.filter(code=code)
        return qs

class POSORNEGView(ModelViewSet):
    
    queryset = POSORNEG.objects.all()
    serializer_class = POSORNEGSerializer
    
    def get_queryset(self):
        qs = super().get_queryset()
        code = self.request.query_params.get('code')
        if code:
            qs = qs.filter(code=code)
        return qs

class MEANOFPERView(ModelViewSet):
    
    queryset = MEANOFPER.objects.all()
    serializer_class = MEANOFPERSerializer


class POINTDATEView(ModelViewSet):
    
    queryset = POINTDATE.objects.all()
    serializer_class = POINTDATESerializer
    
    def get_queryset(self):
        qs = super().get_queryset()
        code = self.request.query_params.get('code')
        if code:
            qs = qs.filter(code=code)
        return qs

class MAKEWORDCLOUDView(ModelViewSet):
    
    queryset = MAKEWORDCLOUD.objects.all()
    serializer_class = MAKEWORDCLOUDSerializer
    
    def get_queryset(self):
        qs = super().get_queryset()
        code = self.request.query_params.get('code')
        date = self.request.query_params.get('date')

        if code:
            qs = qs.filter(code=code)
        if date:
            qs = qs.filter(date=date)
        return qs