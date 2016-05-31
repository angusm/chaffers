(function() {

    angular.module('backendModels').factory('caseTransform', caseTransformFactory);

    function caseTransformFactory() {

        return {
            snakeCaseToCamelCase: snakeCaseToCamelCase,
            camelCaseToSnakeCase: camelCaseToSnakeCase
        };


        // STOP! Nothing but functions past this point alright?
        function snakeCaseToCamelCase(snakeCaseString) {
            return snakeCaseString.replace(/(_\w)/g, transformSnakeCaseMatchToCamelCase);

            /**
             * Replaces a matched snake case section with a camel cased version
             * @param snakeCaseMatch
             */
            function transformSnakeCaseMatchToCamelCase(snakeCaseMatch) {

                // We don't care about the underscore part of the match so,
                // we just want the word part of the match
                var matchedString = snakeCaseMatch[1];
                return matchedString.toUpperCase();

            }
        }

        /**
         * Converts a camelCase string to a snake_case string
         * @param camelCaseString
         * @returns {string} The camelCase string converted to snake_case
         */
        function camelCaseToSnakeCase(camelCaseString) {

            return camelCaseString.replace(/([A-Z])/g, transformCamelCaseMatchToSnakeCase);

            function transformCamelCaseMatchToSnakeCase(camelCaseMatch) {
                return '_' + camelCaseMatch.toLowerCase();
            }
        }

    }

})();
