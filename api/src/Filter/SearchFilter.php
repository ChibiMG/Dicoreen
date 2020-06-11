<?php

namespace App\Filter;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\AbstractContextAwareFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\ORM\QueryBuilder;

final class SearchFilter extends AbstractContextAwareFilter
{
    protected function filterProperty(string $property, $value, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, string $operationName = null)
    {
        if ($property !== 'search') {
            return;
        }

        $reader = new AnnotationReader();
        $annotation = $reader->getClassAnnotation(new \ReflectionClass($resourceClass), SearchAnnotation::class);

        if (!$annotation) {
            throw new \HttpInvalidParamException('No Search implemented.');
        }

        $parameterName = $queryNameGenerator->generateParameterName($property); // Generate a unique parameter name to avoid collisions with other filters

        foreach ($annotation->fields as $field) {
            $queryBuilder->orWhere("LOWER(o.$field) LIKE LOWER(:$parameterName)");
        }

        $queryBuilder->setParameter($parameterName, $value . "%");
    }

    // This function is only used to hook in documentation generators (supported by Swagger and Hydra)
    public function getDescription(string $resourceClass): array
    {
        $description["search"] = [
            'property' => "search",
            'type' => 'string',
            'required' => false,
            'swagger' => [
                'description' => 'Filter using like. This will appear in the Swagger documentation!',
                'name' => 'Custom name to use in the Swagger documentation',
                'type' => 'Will appear below the name in the Swagger documentation',
            ],
        ];

        return $description;
    }
}