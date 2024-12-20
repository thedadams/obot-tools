import json
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

from helpers.auth import client


def main():
    sf = client()
    desc = sf.Opportunity.describe()
    print("Available fields for Opportunity objects:")
    for field in desc["fields"]:
        if field["name"] not in [
            "Id",
            "IsDeleted",
            "Pricebook2Id",
            "SystemModstamp",
            "PushCount",
            "LastAmountChangedHistoryId",
            "LastCloseDateChangedHistoryId",
            "DeliveryInstallationStatus__c",
            "CurrentGenerators__c",
        ]:
            print(
                f"name: {field['name']} - label: {field['label']} - type: {field['type']} - picklistValues: {json.dumps(field.get('picklistValues'))}"
            )


if __name__ == "__main__":
    main()