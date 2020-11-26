from rest_framework.serializers import ModelSerializer
from .models import KOSPI50, STOCKVALUES,FINANCESTATE,POSORNEG,MEANOFPER,POINTDATE,MAKEWORDCLOUD

class KOSPI50Serializer(ModelSerializer):

    class Meta:
        model = KOSPI50
        fields = '__all__'
        
class STOCKVALUESSerializer(ModelSerializer):
    
    class Meta:
        model = STOCKVALUES
        fields = '__all__'
        
class FINANCESTATESerializer(ModelSerializer):
    
    class Meta:
        model = FINANCESTATE
        fields = '__all__'

class POSORNEGSerializer(ModelSerializer):
    
    class Meta:
        model = POSORNEG
        fields = '__all__'

class MEANOFPERSerializer(ModelSerializer):
    
    class Meta:
        model = MEANOFPER
        fields = '__all__'   

class POINTDATESerializer(ModelSerializer):
    
    class Meta:
        model = POINTDATE
        fields = '__all__'   

class MAKEWORDCLOUDSerializer(ModelSerializer):
        
    class Meta:
        model = MAKEWORDCLOUD
        fields = '__all__' 