declare namespace ns_ {
  namespace analytics {
    namespace configuration {
      function setApplicationName(name: string): void;

      function setApplicationVersion(name: string): void;

      function addClient(config: PublisherConfiguration): void;

      function getPublisherConfiguration(id: string): any;

      function setPersistentLabel(name: string, value: any): void;

      function addPersistentLabels(labels: any): void;

      function enableImplementationValidationMode(): void;

      function enableChildDirectedApplicationMode(): void;

      class PublisherConfiguration {
        publisherId: string;
        constructor({ }: any)
      }
    }

    function notifyHiddenEvent(): void;

    function notifyEnterForeground(): void;

    function notifyExitForeground(): void;

    function close(): void;

    function start(): void;

    namespace PlatformApi {
      function setPlatformAPI(platformApi: PlatformAPIs): void;
    }

    enum PlatformAPIs {
      html5,
    }

    class StreamingAnalytics {
      notifyPlay(): void;

      setMetadata(metadata: any): void;

      notifyPause(): void;

      constructor();
    }

    namespace StreamingAnalytics {
      namespace ContentMetadata {
        export enum ContentType {
          LONG_FORM_ON_DEMAND,
          SHORT_FORM_ON_DEMAND,
          LIVE,
          USER_GENERATED_SHORT_FORM_ON_DEMAND,
          USER_GENERATED_LONG_FORM_ON_DEMAND,
          USER_GENERATED_LIVE,
          BUMPER,
          OTHER,
        }
      }

      class ContentMetadata {
        setMediaType(type: StreamingAnalytics.ContentMetadata.ContentType): void;

        addCustomLabels(labels: any): void;

        constructor();
      }

      namespace AdvertisementMetadata {
        export enum AdvertisementType {
          ON_DEMAND_PRE_ROLL,
          ON_DEMAND_MID_ROLL,
          ON_DEMAND_POST_ROLL,
          LIVE,
          BRANDED_ON_DEMAND_PRE_ROLL,
          BRANDED_ON_DEMAND_MID_ROLL,
          BRANDED_ON_DEMAND_POST_ROLL,
          BRANDED_AS_CONTENT,
          BRANDED_DURING_LIVE,
          OTHER,
        }
      }

      class AdvertisementMetadata {
        setMediaType(type: StreamingAnalytics.AdvertisementMetadata.AdvertisementType): void;

        addCustomLabels(labels: any): void;

        constructor();
      }
    }
  }
}

