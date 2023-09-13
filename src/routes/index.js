import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '../containers/Layout';
import HomePage from '../pages/HomePage';
import BuyOrRentPage from '../pages/BuyOrRentPage';
import AddPropertyPage from '../pages/AddPropertyPage';
import PropertyPage from '../pages/PropertyPage';
import SellPage from '../pages/SellPage';
import PropertyListPage from '../pages/PropertyListPage';
import ContactUsPage from '../pages/ContactUsPage';
import AddBlogPostPage from '../pages/AddBlogPostPage';
import WhatWeSellPage from '../pages/WhatWeSellPage';
import BlogPostPage from '../pages/BlogPostPage';
import AboutPage from '../pages/AboutPage';
import TourPage from '../pages/TourPage';
// import i18n from '../i18n';
import BlogPostsService from '../services/BlogPostsService';
import PropertyService from '../services/PropertyService';
import { UIContext } from '../context';
import PropertyTourPage from '../pages/PropertyTourPage';
import ScrollToTop from './ScrollTop';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const RoutesComponent = () => {
  const [layoutKey, setLayoutKey] = useState(Math.random());
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const forceUpdate = useCallback(() => {
    setLayoutKey(Math.random());
  }, []);

  useEffect(() => {
    queryClient.prefetchQuery('property', () =>
      PropertyService.getPropertyList({ recent: false, action: 'sell' })
    );
    queryClient.prefetchQuery('recentProperty', () =>
      PropertyService.getPropertyList({ recent: true, action: 'sell' })
    );
    queryClient.prefetchQuery('rentProperty', () =>
      PropertyService.getPropertyList({ recent: false, action: 'rent' })
    );
    queryClient.prefetchQuery('recentRentProperty', () =>
      PropertyService.getPropertyList({ recent: true, action: 'rent' })
    );

    queryClient.prefetchQuery('blogPosts', BlogPostsService.getPosts);
    queryClient.prefetchQuery(
      'mostPopularBlogPosts',
      BlogPostsService.getMostPopularPosts
    );
  });

  /*   useLayoutEffect(() => {
    if (i18n.language === 'en') {
      document.body.style.fontFamily = `'Smooch Sans', sans-serif`;
    } else if (i18n.language === 'ru') {
      document.body.style.fontFamily = `'Alumni Sans', sans-serif`;
    }
  }, [layoutKey]); */

  return (
    <BrowserRouter>
      <ScrollToTop>
        <QueryClientProvider client={queryClient}>
          <UIContext.Provider
            value={useMemo(() => {
              return {
                forceUpdate,
                searchTerm,
                setSearchTerm,
                isSearched,
                setIsSearched,
              };
            }, [forceUpdate, isSearched, searchTerm])}
          >
            <Layout key={layoutKey}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/buy"
                  element={<BuyOrRentPage currentPage="sell" />}
                />
                <Route
                  path="/rent"
                  element={<BuyOrRentPage currentPage="rent" />}
                />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/add-property" element={<AddPropertyPage />} />
                <Route path="/property-list" element={<PropertyListPage />} />
                <Route path="/property/:id" element={<PropertyPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/add-post" element={<AddBlogPostPage />} />
                <Route path="/cyprus" element={<WhatWeSellPage />} />
                <Route path="/cyprus/:id" element={<BlogPostPage />} />
                <Route path="/cyprus/title/:title" element={<BlogPostPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tours" element={<PropertyTourPage />} />
                <Route path='/property-tour' element= {<TourPage />} />
              </Routes>
            </Layout>
          </UIContext.Provider>
        </QueryClientProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default RoutesComponent;
